import requests

post = True
list = False

url = "https://adonis-backend-tcc.herokuapp.com/"

# Lista um dos atributos
if(list):
  get = requests.get(url).json()
  jsonLength = len(get)
  i = 0
  while i < jsonLength:
    x = get[i]['name']  # name, diagnostic, transference, 
                        # temperature, blood_oxygen, heart_rate, 
                        # fever, headache, runny_nose, 
                        # created_at, updated_at, date, hour
    print(x)
    i += 1
  
# Lista atributos de um usuário
if(post):
  idx = '315'
  url = "https://adonis-backend-tcc.herokuapp.com/posts/" + idx
  get = requests.get(url).json()

  name = get['name']
  diagnostic = get['diagnostic']
  transference = get['transference']
  temperature = get['temperature']
  blood_oxygen = get['blood_oxygen']
  heart_rate = get['heart_rate']
  fever = get['fever']
  headache = get['headache']
  runny_nose = get['runny_nose']
  created_at = get['created_at']
  updated_at = get['updated_at']
  date = get['date']
  hour = get['hour']

  data = [name, diagnostic, transference, temperature, blood_oxygen, heart_rate, fever, headache, runny_nose, created_at, updated_at, date, hour]

  print(data)