<!DOCTYPE html>
<html>
    <head>
        <title>Process Page for Get</title>
    </head>
    <body>
        <h1>
        <?php
            $month = intval($_GET['month']);
            echo "Hello, " . $_GET['firstName'] . " " . $_GET['lastName'];
        ?>
<!--            switch (personalInfo.Month)-->
<!--            {-->
<!--            case Month.Jan: //jan-->
<!--            if (personalInfo.Day >= 20)-->
<!--            {-->
<!--            Console.WriteLine("you are an Aquarius.");-->
<!--            }-->
<!--            else-->
<!--            {-->
<!--            Console.WriteLine("you are a Capricorn.");-->
<!--            }-->
<!--            break;-->
<!--            case Month.Feb: //feb-->
<!--            if (personalInfo.Day >= 19)-->
<!--            {-->
<!--            Console.WriteLine("you are a Pisces.");-->
<!--            }-->
<!--            else-->
<!--            {-->
<!--            Console.WriteLine("you are an Aquarius.");-->
<!--            }-->
<!--            break;-->
<!--            case Month.Mar: //mar-->
<!--            if (personalInfo.Day >= 21)-->
<!--            {-->
<!--            Console.WriteLine("you are an Aries.");-->
<!--            }-->
<!--            else-->
<!--            {-->
<!--            Console.WriteLine("you are a Pisces.");-->
<!--            }-->
<!--            break;-->
<!--            case Month.Apr: //apr-->
<!--            if (personalInfo.Day >= 20)-->
<!--            {-->
<!--            Console.WriteLine("you are a Taurus.");-->
<!--            }-->
<!--            else-->
<!--            {-->
<!--            Console.WriteLine("you are an Aries.");-->
<!--            }-->
<!--            break;-->
<!--            case Month.May: //may-->
<!--            if (personalInfo.Day >= 21)-->
<!--            {-->
<!--            Console.WriteLine("you are a Gemini.");-->
<!--            }-->
<!--            else-->
<!--            {-->
<!--            Console.WriteLine("you are a Taurus.");-->
<!--            }-->
<!--            break;-->
<!--            case Month.June: //june-->
<!--            if (personalInfo.Day >= 22)-->
<!--            {-->
<!--            Console.WriteLine("you are a Cancer.");-->
<!--            }-->
<!--            else-->
<!--            {-->
<!--            Console.WriteLine("you are a Gemini.");-->
<!--            }-->
<!--            break;-->
<!--            case Month.July: //july-->
<!--            if (personalInfo.Day >= 23)-->
<!--            {-->
<!--            Console.WriteLine("you are a Leo.");-->
<!--            }-->
<!--            else-->
<!--            {-->
<!--            Console.WriteLine("you are a Cancer.");-->
<!--            }-->
<!--            break;-->
<!--            case Month.Aug: //aug-->
<!--            if (personalInfo.Day >= 23)-->
<!--            {-->
<!--            Console.WriteLine("you are a Virgo.");-->
<!--            }-->
<!--            else-->
<!--            {-->
<!--            Console.WriteLine("you are a Leo.");-->
<!--            }-->
<!--            break;-->
<!--            case Month.Sept: //sept-->
<!--            if (personalInfo.Day >= 23)-->
<!--            {-->
<!--            Console.WriteLine("you are a Libra.");-->
<!--            }-->
<!--            else-->
<!--            {-->
<!--            Console.WriteLine("you are a Virgo.");-->
<!--            }-->
<!--            break;-->
<!--            case Month.Oct: //oct-->
<!--            if (personalInfo.Day >= 24)-->
<!--            {-->
<!--            Console.WriteLine("you are a Scorpio.");-->
<!--            }-->
<!--            else-->
<!--            {-->
<!--            Console.WriteLine("you are a Libra.");-->
<!--            }-->
<!--            break;-->
<!--            case Month.Nov: //nov-->
<!--            if (personalInfo.Day >= 23)-->
<!--            {-->
<!--            Console.WriteLine("you are a Sagittarius.");-->
<!--            }-->
<!--            else-->
<!--            {-->
<!--            Console.WriteLine("you are a Scorpio.");-->
<!--            }-->
<!--            break;-->
<!--            case Month.Dec: //dec-->
<!--            if (personalInfo.Day >= 22)-->
<!--            {-->
<!--            Console.WriteLine("you are a Capricorn.");-->
<!--            }-->
<!--            else-->
<!--            {-->
<!--            Console.WriteLine("you are a Sagittarius.");-->
<!--            }-->
<!--            break;-->
<!---->
<!--            }-->
        </h1>
    </body>
</html>