from django.shortcuts import render,HttpResponse

# Create your views here.
def home(request):
    return render(request,'home.html')
def about(request):
    return HttpResponse("hello about")
def contact(request):
    return HttpResponse("hello contact")
def video(request):
    return render(request,'webcam.html')
