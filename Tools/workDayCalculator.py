"""
    Name: workDayCalculator.py

    Description: Calculate the amount of days worked from home. This is script will ask how many days
                 that you worked each month and will calculate the total amount of working business days
    
    Input: Year, Days off per month

    Output: Total days worked
"""
#imports
import datetime

#Constants
daysInMonthNotLeap = [31,28,31,30,31,30,31,31,30,31,30,31]
daysInMonthLeap = [31,29,31,30,31,30,31,31,30,31,30,31]
months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
numStatutoryHolidays = 11

def getYear():
    year = int(raw_input("What is the year you want to get the total business work days? "))
    return year

def getDays(month):
    days = int(raw_input("How many personal vacation days did you take off in %s? " % month))
    return days

def calculateNumOfWeekdays(year):
    """
    - if it is a leap year, the start day is a saturday then there are 106 (53 saturdays and sundays)
    - if it is a leap year, the start day is a sunday then there are 105
    - if it is not a leap year, the start day of the year is a saturday or sunday then there are 105
    - else it is not a leap year, the start day of the year is not a saturday or sunday then there are 104
    """
    dateObj = datetime.date(year, 1, 1)

    # return number of weekend days based on the day of the week
    # if it is a leap year, the start day is saturday
    if (year % 4 == 0) and (dateObj.weekday() == 5):
        return 106
    #if leap year, the start day is sunday
    elif ((year % 4 == 0) and (dateObj.weekday() == 6)) or (dateObj.weekday() > 4):
        return 105
    else:
        return 104


def main():
    numDaysInYear= 365

    #get all the params
    year = getYear()
    daysOffByMonth = []

    for month in months:
        daysOffByMonth.append(getDays(month))
    
    #Number of days in the year
    if year % 4 == 0:
        numDaysInYear += 1

    numWeekendDays = calculateNumOfWeekdays(year)
    totalDaysOff = numWeekendDays + numStatutoryHolidays
    totalDaysWorked =  numDaysInYear - totalDaysOff

    print("\n\n--------------------------------------------------------")
    print("Total days worked are: %d \nTotal days taken off are: %d" % (totalDaysWorked, totalDaysOff))




#Main
if __name__ == "__main__":
    main()