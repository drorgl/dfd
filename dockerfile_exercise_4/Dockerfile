FROM alpine
LABEL creator="Dror Gluska"

ENV message="test message"

COPY runme.py ./

RUN apk add python

CMD python runme.py
