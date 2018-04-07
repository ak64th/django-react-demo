from rest_framework import serializers
from drf_dynamic_fields import DynamicFieldsMixin

from .models import Article

__all__ = ['ArticleSerializer']


class ArticleSerializer(DynamicFieldsMixin, serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['id', 'title', 'slug', 'description']
