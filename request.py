import requests

auth = True
post = True


if(auth):
  url = "https://adonis-backend-tcc.herokuapp.com/auth"
  data = {
	"username": "master",
	"password": "master"
  }
  x = requests.post(url, data=data)
  response = x.json()
  Token = response['token']
  # print(Token)


if(post):
  url = "https://adonis-backend-tcc.herokuapp.com/posts/"
  data = {
    "name": "Python Teste",
    "temperature": 37.3,
    "diagnostic": 1,
    "blood_oxygen": 93,
    "heart_rate": 85,
    "fever": 1,
    "headache": 0,
    "runny_nose": 1
    }
   
  headers = {"Authorization": "Bearer " + Token}
  x = requests.post(url, data=data, headers=headers)
  print(x)