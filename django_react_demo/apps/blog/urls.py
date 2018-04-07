from django.conf.urls import url
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    url(
        r'^api/article/$',
        views.ArticleListView.as_view(),
        name='article-list'
    ),
    url(
        r'^api/article/(?P<pk>[0-9]+)/',
        views.ArticleDetailView.as_view(),
        name='article-detail'
    ),
    url(
        r'^.*$',
        TemplateView.as_view(template_name='blog/index.html'),
        name='blog_entry'
    ),
]
