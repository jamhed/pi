package Pi::SendFile;
use strict;

use Encode qw(decode);
use HTTP::Date qw( str2time time2str );
use Dancer qw();

our $default_prefix  = 'public';       # default path in protected folder
our $public          = 'public';       # public folder
our $protected       = 'protected';    # protected folder

sub LOG { Dancer::debug(join(" ", map { defined $_ ? $_ : '_' } @_, "\n")) }

sub sendfile { 
   my ($uri) = @_;
   $uri = decode 'utf-8', Dancer::request->path_info if ! $uri;

   # public folder: cacheable images, js-libraries, css, etc
   my $path = sprintf("%s%s", $public, $uri);
   if (-f $path) {
      LOG("PUBLIC:", $uri, $path);
      Dancer::header('Expires', time2str(time+24*3600));
      return Dancer::send_file($path, system_path => 1);
   }

   my $prefix = $default_prefix;
   $path = sprintf("%s/%s%s.html", $protected, $prefix, $uri eq '/' ? '/index' : $uri);
   if (-f $path) {
      LOG("PREFIX:", $prefix, $uri, $path);
      return Dancer::send_file($path, system_path => 1);
   }

   # none of above
   LOG('MISS:', $prefix, $uri, $path);
   Dancer::status 'not_found';
   return Dancer::send_file(sprintf("%s/%s", $public, "404.html"), system_path => 1);
};

1;