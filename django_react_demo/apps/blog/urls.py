from django.conf.urls import url, include
from django.views.generic import TemplateView
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r'article', views.ArticleViewSet)

app_name = 'blog'

urlpatterns = [
    url(
        r'^api/', include(router.urls)
    ),
    url(
        r'^.*$',
        TemplateView.as_view(template_name='blog/index.html'),
        name='entry'
    ),
]
