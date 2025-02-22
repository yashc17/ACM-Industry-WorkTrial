"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path
from charts.views import CandlestickDataView, LineChartDataView, BarChartDataView, PieChartDataView


# creating the url branches for the API for the different charts
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/candlestick-data/', CandlestickDataView.as_view()),
    path('api/line-chart-data/', LineChartDataView.as_view()),
    path('api/bar-chart-data/', BarChartDataView.as_view()),
    path('api/pie-chart-data/', PieChartDataView.as_view()),
]

