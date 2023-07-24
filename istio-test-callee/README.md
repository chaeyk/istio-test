# This is...

You can test istio retry/outlier detection with this simple http server

# How to

/liveness endpoint returns 200. If you call /liveness/false endpoint, /liveness will return 503.
/readiness works the same way.

see [test.http](http/test.http)
