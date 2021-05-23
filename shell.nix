{ pkgs ? import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/80fcac0b311031657783b721c935d2d9348dffee.tar.gz") {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs-14_x
    (yarn.override { nodejs = nodejs-14_x; })
  ];

  shellHook = ''
    yarn install
  '';
}
