FROM ruby:2.7-buster

RUN mkdir /app
WORKDIR /app

COPY Gemfile Gemfile.lock ./
RUN bundler install

EXPOSE 4000
