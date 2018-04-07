from .common import *
import os

ALLOWED_HOSTS = ['*']

DEBUG = False

EMAIL_BACKEND = 'django.core.mail.backends.dummy.EmailBackend'

WSGI_APPLICATION = 'django_react_demo.wsgi.application'

STATIC_URL = '/static/'

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "static"),
    os.path.join(BASE_DIR, "client/dist"),
]

STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# make sure webpack loader always goes for dist when debug is off
WEBPACK_LOADER = {
    'DEFAULT': {
        'CACHE': True,
        'BUNDLE_DIR_NAME': 'blog/',
        'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats-prod.json')
    }
}
