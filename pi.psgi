#!/usr/bin/env perl
use lib split /:/, qx{ bin/perllib.pl };
use open IO => ':locale';
use Dancer;

load_app 'Pi';

dance;
