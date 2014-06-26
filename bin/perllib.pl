#!/usr/bin/perl -w
use strict;
sub path (@) { join('/',  @_) }

my $path = $ARGV[0] || '.';

my @lib;
if (-e path $path, 'lib') {
	push @lib, path $path, 'lib';
}

if ( -e path $path, 'extlib' ) {
foreach my $ext ( qx( ls $path/extlib ) ) {
	chomp $ext;
	my $p = path $path, 'extlib', $ext, 'lib';
	push @lib, $p if ( -e $p );
}
}

print join(':', @lib);
