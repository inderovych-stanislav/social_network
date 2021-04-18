#!/bin/bash

for tmpl in /etc/nginx/conf.d/*.template
do
    envsubst "`for v in $(compgen -v); do printf '${%s} ' $v; done`" \
        < "${tmpl}" \
        > "${tmpl/template/conf}";
done

nginx -g 'daemon off;'
