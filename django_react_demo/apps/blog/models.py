from django.db import models
from django.utils import six
from django.utils.translation import ugettext_lazy as _
from slugify import slugify
from django_extensions.db.fields import AutoSlugField

__all__ = ['Article']


@six.python_2_unicode_compatible
class Article(models.Model):
    title = models.CharField(_('title'), max_length=255)
    description = models.TextField(_('description'), blank=True, null=True)
    slug = AutoSlugField(
        _('slug'),
        max_length=100,
        allow_unicode=True,
        populate_from='title',
        slugify_function=slugify
    )

    def __str__(self):
        return self.title
