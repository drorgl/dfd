FROM alpine
LABEL creator="Dror Gluska"

ARG message="test message"

RUN echo "print(\"$message\")" > runme.py

RUN apk add python

CMD python runme.py
