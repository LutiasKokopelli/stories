# coding: utf-8
dbdate=1963.61365   # August 12, 1963
charlist=['Layton','Luke','Emmy']


ufdate=1963.999
cvdate=dbdate-6/365
lsdate=cvdate-3-.46
htdate=ufdate-10-.342
e16dte=lsdate-6-.461
aledte=cvdate-.465
alsdte=aledte-.42


# ufdate=(1963.833+1964.162)/2
# cvdate=((dbdate-14/365)+(dbdate-7/365))/2
# lsdate=((cvdate-3-182/365)+(cvdate-3))/2
# htdate=((ufdate-10-182/365)+(ufdate-10))/2
# e16dte=((lsdate-6-182/365)+(lsdate-6))/2
# aledte=((cvdate-7/365)+(cvdate-14/365))/2
# alsdte=((aledte-.25)+(aledte-.75))/2

reqlist={
"CV":{'Event':'Professor Layton and the Curious Village'     ,'Date':cvdate,'Layton':None,'Luke':None,'Emmy':None,
    'Req':['<ufdate','<dbdate']
},
"DB":{'Event':'Professor Layton and the Diabolical Box'      ,'Date':dbdate,'Layton':None,'Luke':None,'Emmy':None,
    'Req':[]
},
"UF":{'Event':'Professor Layton and the Unwound Future'      ,'Date':ufdate,'Layton':None,'Luke':13  ,'Emmy':None,
    'Req':[]
},
"Ht":{'Event':'Layton gets his hat'                          ,'Date':htdate,'Layton':27  ,'Luke':None,'Emmy':None,
    'Req':['<ufdate-10.','>ufdate-11.','<reqlist["E16"]["Date"]']
},
"E16":{'Event':'Emmy meets Layton and Grosky'                ,'Date':e16dte,'Layton':None,'Luke':None,'Emmy':16  ,
    'Req':['<lsdate-6.','>lsdate-7.','>reqlist["Ht"]["Date"]']
},
"LS":{'Event':'Professor Layton and the Last Specter'        ,'Date':lsdate,'Layton':34  ,'Luke':10  ,'Emmy':None,
    'Req':['<cvdate-3.','>cvdate-4.']
},
"ALs":{'Event':'Professor Layton and the Azran Legacy begins','Date':alsdte,'Layton':None,'Luke':12  ,'Emmy':26  ,
    'Req':[]
},
"ALe":{'Event':'Professor Layton and the Azran Legacy ends'  ,'Date':aledte,'Layton':None,'Luke':12  ,'Emmy':26  ,
    'Req':[]
},
}

# ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

evlist=[k for k in reqlist.keys()]
import pandas as pd;pd.options.mode.chained_assignment=None
pd.options.display.float_format='{:.0f}'.format
pd.set_option('display.max_rows',None)

# def date_to_month(d):
#     m=(d['Date']-float(int(d['Date'])))*365 # ONE DAY = 1/365 = 0.27%
#     if m<32:return("January")               # January:    0.0% -  8.5%
#     elif m<60:return("February")            # February:   8.5% - 16.2%
#     elif m<91:return("March")               # March:     16.2% - 24.7%
#     elif m<121:return("April")              # April:     24.7% - 32.9%
#     elif m<152:return("May")                # May:       32.9% - 41.4%
#     elif m<182:return("June")               # June:      41.4% - 49.6%
#     elif m<213:return("July")               # July:      49.6% - 58.1%
#     elif m<244:return("August")             # August:    58.1% - 66.6%
#     elif m<274:return("September")          # September: 66.6% - 74.8%
#     elif m<305:return("October")            # October:   74.8% - 83.3%
#     elif m<335:return("November")           # November:  83.3% - 91.5%
#     else:return("December")                 # December:  91.5% - 00.0%

def date_to_month(d):# ONE DAY = 1/365 = 0.27%
    m=(d['Date']-float(int(d['Date'])))*365+1
    delimiters=[31,31+28,31+28+31,31+28+31+30,31+28+31+30+31,31+28+31+30+31+30,31+28+31+30+31+30+31,31+28+31+30+31+30+31+31,31+28+31+30+31+30+31+31+30,31+28+31+30+31+30+31+31+30+31,31+28+31+30+31+30+31+31+30+31+30]
    if m<=delimiters[0]:
        return("January "+str(m))                # January:    0.0% -  8.5%
    elif m<=delimiters[1]:
        return("February "+str(int(m-delimiters[0]))) # February:   8.5% - 16.2%
    elif m<=delimiters[2]:
        return("March "+str(int(m-delimiters[1])))               # March:     16.2% - 24.7%
    elif m<=delimiters[3]:
        return("April "+str(int(m-delimiters[2])))              # April:     24.7% - 32.9%
    elif m<=delimiters[4]:
        return("May "+str(int(m-delimiters[3])))                # May:       32.9% - 41.4%
    elif m<=delimiters[5]:
        return("June "+str(int(m-delimiters[4])))               # June:      41.4% - 49.6%
    elif m<=delimiters[6]:
        return("July "+str(int(m-delimiters[5])))               # July:      49.6% - 58.1%
    elif m<=delimiters[7]:
        return("August "+str(int(m-delimiters[6])))             # August:    58.1% - 66.6%
    elif m<=delimiters[8]:
        return("September "+str(int(m-delimiters[7])))          # September: 66.6% - 74.8%
    elif m<=delimiters[9]:
        return("October "+str(int(m-delimiters[8])))            # October:   74.8% - 83.3%
    elif m<=delimiters[10]:
        return("November "+str(int(m-delimiters[9])))           # November:  83.3% - 91.5%
    else:
        return("December "+str(int(m-delimiters[10])))                 # December:  91.5% - 00.0%

check=dict()
for k in reqlist.keys():
    check[k]=[]
    for statement in reqlist[k]['Req']:
        if not eval(str(reqlist[k]['Date'])+statement):
            check[k].append('of date '+str(reqlist[k]['Date'])+" IS NOT "+statement)
    if check[k]!=[]:
        for st in check[k]:
            print('\033[31m',reqlist[k]['Event'],st,'\033[0m')

def add_rows(event,dic=reqlist,chars=charlist,yrmin=1952,yrmax=1965):
    for y in range(-10,10):
        if dic[event]['Date']+y<yrmin or dic[event]['Date']+y>yrmax or all(dic[event][v] is None for v in charlist):continue
        else:
            dic[event+'-'+str(y)]=dict();dic[event+'-'+str(y)]['Date']=dic[event]['Date']+y;dic[event+'-'+str(y)]['Event']='According to '+event
            for c in chars:dic[event+'-'+str(y)][c]=dic[event][c]+y if dic[event][c]is not None else None
for e in evlist:add_rows(e)

d=pd.DataFrame.from_dict(reqlist,orient='index');d=d.drop('Req',axis=1)
d['Year']=d['Date'].astype(int)
d['Month']=d.apply(date_to_month,axis=1)
d['Percentage of Year']=(d['Date']-d['Date'].astype(int).astype(float))*100
d['S']='\033[0m ';d['E']='\033[0m '

def color_extracolumns(d):
    if'According to 'in d['Event']:return('\033[91m')
    else:return('\033[00m')

d=d.sort_values('Date');d=d.fillna('');d.index=[' ']*len(d)
d['S']=d.apply(color_extracolumns,axis=1)
d=d[['S','Event','Percentage of Year','Month','Year']+charlist+['E']]
print('\n\n');print(d,'\n\n')

# ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
# ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

eventlist=d['Event'].values.tolist()
chagelist={c:d[c].values.tolist()for c in charlist}
agecheck=[]
for c in charlist:
    for i in range(1,len(chagelist[c])):
        if not isinstance(chagelist[c][i-1],str)and not isinstance(chagelist[c][i],str):
            if chagelist[c][i-1]>chagelist[c][i]:
                agecheck.append(c+"'"+'s age is inconsistent between "'+eventlist[i].replace('According to ','')+'" and "'+eventlist[i-1].replace('According to ','')+'"!')
for i in list(set(agecheck)):print(i)
if agecheck==[]:
    print('\n\n');print(d.loc[~d['Event'].str.contains("According to ")][['Event','Month','Year']+charlist],'\n\n')
    print("\033[92m   It's hard to believe, but somehow you actually pulled it off! Everything checks out!\033[0m")
print('\n\n')



# d.to_csv('timeline_output.csv',index=False)



# Pour toutes les dates possibles de CV :
#     Pour toutes les dates possibles d'AL fin :
#         Si Emmy==26 ET Luke==12 {
#             Pour toutes les dates possibles d'AL début :
#                 Si Emmy==26 ET Luke==12 {
#                     Pour toutes les dates possibles de LS :
#                         Si Luke==10 ET Layton==34 {
#                             Pour Flashback = LS- 6 ans :
#                                 Si Emmy==16 {
#                                     Pour toutes les dates possibles d'UF :
#                                         Si UF-10<Flashback ET Layton==26:
#                                             VICTOIRE





# SORT EVENTS -----------------------------------------------
