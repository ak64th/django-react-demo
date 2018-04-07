from .common import *

DEBUG = True

EMAIL_BACKEND = 'django.core.mail.backends.dummy.EmailBackend'

WSGI_APPLICATION = 'django_react_demo.wsgi.application'

STATIC_URL = '/static/'

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "static"),
]

WEBPACK_LOADER = {
    'DEFAULT': {
        'CACHE': False,
        'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats.json'),
        'POLL_INTERVAL': 0.1,
        'IGNORE': ['.+\.hot-update.js', '.+\.map']
    }
}
