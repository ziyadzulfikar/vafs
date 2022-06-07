from django.shortcuts import render,redirect

# Create your views here.

def Home(request):
    return render(request, 'index.html',{'name': 'Ziyad'})

def face(request):
    return render(request, 'face.html')

def new(request):
    if(request.method == 'POST'):
        name = request.POST["name"]
        caseFile = request.POST["caseFile"]
        suspectName = request.POST["suspectName"]
        return render(request, 'describe.html')
    else:
        return render(request, 'new.html')

def saved(request):
    return render(request, 'saved.html')

def open(request):
    return render(request, 'open.html')

def about(request):
    return render(request, 'about.html')

def close(request):
    return render(request, 'close.html')

def gender(request):
    return render(request, 'Gender/Gender.html')

def describe(request):
    return render(request, 'Describe.html')

def textSpeech(request):
    if(request.method == 'GET'):
        TextSp = request.GET["TextSp"]
    return render(request, 'texttospeech.html', {'textSp':TextSp})