from rest_framework import serializers

from .models import Article

__all__ = ['ArticleSerializer']


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['id', 'title', 'slug', 'description']
