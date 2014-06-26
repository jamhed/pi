package Pi;
use Dancer ':syntax';
use Pi::SendFile;
use strict;
use utf8;
use Encode qw(decode);

sub LOG { debug(join(" ", map { defined $_ ? $_ : '_' } @_, "\n")) }

post "/currency/table" => sub {
   my $packet = from_json( param 'packet' );
   debug($packet);
   content_type 'application/json';
   return <<JSON1 if $packet->{args}->{page} == 0;
{"page":0,"page_count":7,"rr":[{"amount":"21.20","stamp":"2013-07-22 09:52:15.314515","id":176,"symbol":"KZT"}]}
JSON1
   return <<JSON2 if $packet->{args}->{page} == 1;
{"page":1,"page_count":7,"rr":[{"symbol":"BRL","amount":"14.56","id":177,"stamp":"2013-07-22 09:52:15.314515"}]}
JSON2
   return <<JSON3 if $packet->{args}->{page} == 2;
{"page":2,"page_count":7,"rr":[{"amount":"57.12","id":178,"stamp":"2013-07-22 09:52:15.314515","symbol":"DKK"}]}
JSON3
   return <<JSON4 if $packet->{args}->{page} == 3;
{"page":3,"page_count":7,"rr":[{"symbol":"SGD","id":179,"stamp":"2013-07-22 09:52:15.314515","amount":"25.62"}]}
JSON4
   return <<JSON5 if $packet->{args}->{page} == 4;
{"page":4,"page_count":7,"rr":[{"amount":"32.43","stamp":"2013-07-22 09:52:15.314515","id":180,"symbol":"USD"}]}
JSON5
   return <<JSON6 if $packet->{args}->{page} == 5;
{"page":5,"page_count":7,"rr":[{"stamp":"2013-07-22 09:52:15.314515","id":181,"amount":"21.78","symbol":"BGN"}]}
JSON6
   return <<JSON7 if $packet->{args}->{page} == 6;
{"page":6,"page_count":7,"rr":[{"symbol":"AUD","id":182,"stamp":"2013-07-22 09:52:15.314515","amount":"29.76"}]}
JSON7
};

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
