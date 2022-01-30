using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DelegatesSolution
{
    public delegate decimal LowRisk(decimal arg1);
    class Program
    {
        static void Main(string[] args) {
            ShippingFeesDelegate theDel;
            ShippingDestination theDest;

            LowRisk lowRisk = delegate(decimal arg1)
            {
                return (arg1 - 10);
            };

            string theZone;
            do {
                // get the destination zone
                Console.WriteLine("What is the destination zone?");
                theZone = Console.ReadLine();

                // if the user wrote "exit" then terminate the program,
                // otherwise continue 
                if (!theZone.Equals("exit")) {
                    // given the zone, retrieve the associated shipping info
                    theDest = ShippingDestination.getDestinationInfo(theZone);

                    // if there's no associated info, then the user entered
                    // an invalid zone, otherwise continue
                    decimal itemPrice;
                    if (theDest != null) {
                        // ask for the price and convert the string to a decimal number
                        do {
                            Console.WriteLine("What is the item price?");
                            string thePriceStr = Console.ReadLine();
                            itemPrice = decimal.Parse(thePriceStr);
                        } while (itemPrice < 0 || itemPrice == 0) ;
                            // Each ShippingDestination object has a function called calcFees,
                            // use that as the delegate for calculating the fee
                            theDel = theDest.calcFees;

                        // For high-risk zones, we tack on the delegate that adds more
                        if (theDest.m_isHighRisk) {
                            theDel += delegate(decimal thePrice, ref decimal itemFee) {
                                itemFee += 25.0m;
                                /*itemFee += 25.0m - 100;*/
                            };
                        }

                        //for low risk area
                        if (theDest.m_isHighRisk == false)
                        {
                            theDel += delegate (decimal thePrice, ref decimal itemFee) {
                                // if shipping fees are over $100
                                if (itemFee >= 100)
                                {
                                    /*itemFee += - 10;*/
                                    itemFee += lowRisk(ref itemFee);

                                }

                            };
                        }

                        // now all that is left to do is call the delegate and output
                        // the shipping fee to the Console
                        decimal theFee = 0.0m;
                        theDel(itemPrice, ref theFee);
                        Console.WriteLine("The shipping fees are: {0}", theFee);
                    }
                    else {
                        Console.WriteLine("Hmm, you seem to have entered an uknown destination. Try again or 'exit'");
                    }
                }
            } while (theZone != "exit");
        }
    }
}
