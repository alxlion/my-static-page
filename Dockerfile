FROM abiosoft/caddy:0.9.1

MAINTAINER Alexandre Lion <hello@alexandre.xyz>

COPY Caddyfile /etc/Caddyfile
COPY . /srv

EXPOSE 2015
