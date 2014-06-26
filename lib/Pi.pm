package Pi;
use Dancer ':syntax';
use Pi::SendFile;
use strict;
use utf8;
use Encode qw(decode);

sub LOG { debug(join(" ", map { defined $_ ? $_ : '_' } @_, "\n")) }

any "/jserr" => sub {
   my $msg = param("msg");
   send_file("images/1x1.gif");
   LOG("jserr:", $msg);
};

get qr{.*} => sub {
   my $uri = decode 'utf-8', Dancer::request->path_info;
   if ($uri eq '/sandbox-tmpl') {
      sleep 1;
   }
   Pi::SendFile::sendfile();
};

1;
