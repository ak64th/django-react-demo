from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic import TemplateView
from django_js_reverse.views import urls_js

app_entry = TemplateView.as_view(template_name='blog/index.html')


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^blog/', include('django_react_demo.apps.blog.urls')),
    url(r'^js_reverse/$', urls_js, name='js_reverse'),
]
