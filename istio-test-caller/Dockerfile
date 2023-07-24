FROM alpine:3.18

RUN apk update && apk add curl

COPY doLoop.sh /

CMD ["/bin/sh", "/doLoop.sh"]
