from twilio.rest import Client 
 
account_sid = 'AC8a6157dcb4a9745b7dfbc0150574448a' 
auth_token = 'fa6279e45cb537a44d90529a8db3f2eb' 
client = Client(account_sid, auth_token) 
def send_love():
    message = client.messages.create( 
                              from_='whatsapp:+14155238886',
                              body='CHUTIYE AAYA MSG',        
                              to='whatsapp:+917232074757' 
                          ) 
 
    print(message.sid)