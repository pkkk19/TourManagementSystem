from django import forms
from Admin.models import *

class UploadFileForm(forms.Form):
    title = forms.CharField(max_length=50)
    file = forms.FileField()
class userLogin(forms.ModelForm):
    class Meta:
        model=UserLogin
        fields=[
            'User_name',
            'password',
            'Email',
            'Phone'
        ]
        widgets={
            'passwords':forms.PasswordInput()
        }