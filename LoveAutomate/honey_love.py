from twilio.rest import Client 
 
account_sid = 'your SID' 
auth_token = 'YOUR TOKEN FROM TWILIO' 
client = Client(account_sid, auth_token) 
def send_love():
    message = client.messages.create( 
                              from_='whatsapp:+14155238886',
                              body='YOUR MSG',        
                              to='whatsapp: YOUR NO.' 
                          ) 
 
    print(message.sid)