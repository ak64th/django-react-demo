from django.conf.urls import url, include
from django.contrib import admin
from django_js_reverse.views import urls_js

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^blog/', include('django_react_demo.apps.blog.urls')),
    url(r'^js_reverse/$', urls_js, name='js_reverse'),
]
