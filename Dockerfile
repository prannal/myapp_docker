FROM httpd

COPY ./dist/client/* /usr/local/apache2/htdocs/

EXPOSE 80

CMD apachectl -D FOREGROUND