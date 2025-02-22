from django.shortcuts import render
from datetime import datetime
from rest_framework.response import Response
from rest_framework.views import APIView
from . serializers import CandlestickSerializer, LineChartSerializer, BarChartSerializer, PieChartSerializer

# candlestick api
class CandlestickDataView(APIView):
    def get(self, request):
        try:
            data = [
                {
                "timestamp": int(datetime.strptime("2023-01-01", "%Y-%m-%d").timestamp() * 1000)+28800000,
                "open": 30,
                "high": 40,
                "low": 25,
                "close": 35
                },
                {
                "timestamp": int(datetime.strptime("2023-01-02", "%Y-%m-%d").timestamp() * 1000)+28800000,
                "open": 35,
                "high": 45,
                "low": 30,
                "close": 40
                }]   
            serializer = CandlestickSerializer(data, many=True)  # No need to call is_valid()
            return Response({"data": serializer.data})  # Wrap in "data" key to match frontend
        
        except Exception as e:
            return Response({"error": str(e)}, status=500)  # Capture actual error message

# line chart api
class LineChartDataView(APIView):
    def get(self, request):
        try:
            data = {"labels": ["Jan", "Feb", "Mar", "Apr"], "data": [10, 20, 30, 40]}
            serializer = LineChartSerializer(data)
            return Response(serializer.data)
        
        except Exception:
           return Response({"error": str(Exception)})

# bar chart api
class BarChartDataView(APIView):
    def get(self, request):
        try:
            data = {"labels": ["Product A", "Product B", "Product C"], "data": [100, 150, 200]}
            serializer = BarChartSerializer(data)
            return Response(serializer.data)
        
        except Exception:
           return Response({"error": str(Exception)})


# pie chart api
class PieChartDataView(APIView):
    def get(self, request):
        try:
            data = {"labels": ["Red", "Blue", "Yellow"], "data": [300, 50, 100]}
            serializer = PieChartSerializer(data)
            return Response(serializer.data)
        
        except Exception:
           return Response({"error": str(Exception)})
