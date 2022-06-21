import React, { Component } from 'react';
import { StyleSheet,Text, View ,ScrollView,Image,TextInput, Alert} from 'react-native';
import { Container, Header, Content, Accordion } from "native-base";
const dataArray = [
    { title: "Ask", content: "This is the lowest price an owner is willing to accept for an asset." },
    { title: "Asset", content: "Something that has the potential to earn money for you. It is something you own that can reasonably be expected to produce something for you. Assets include stocks, bonds, commodities, real estate, and other investments" },
    { title: "Asset allocation", content: "One of the ways to divide up the holdings in your portfolio is to do so by asset class. The idea is that different assets perform opposite to each other, and you can limit some of your risks by allocating your portfolio according to the type of asset you have." },
    { title: "Balance sheet", content: "A statement showing what a company owns, as well as the liabilities the company has and stating the outstanding shareholder equity." },
    { title: "Bear market", content: "This is a market that is falling. A bear market has a downward trend, and someone who believes the market is headed for a drop is often referred to as a “bear”. Bear markets can last for a few weeks or years." },
    { title: "Bid", content: "This is the highest price a buyer is willing to pay when buying an investment. Today, electronic trading makes it possible to ask and bid to be matched up automatically and almost instantly." },
    { title: "Blue chip", content: "You might hear reporters and others refer to “blue-chip stocks.” Blue chips are companies that have a long history of good earnings, good balance sheets, and even regularly increasing dividends. These are solid companies that may not be exciting, but they are likely to provide reasonable returns over time." },
    { title: "Bond", content: "This is an investment that represents what an entity owes you. Essentially, you lend money to a government or a company, and you are promised that the principal will be returned plus interest." },
    { title: "Book value", content: "If you take all the liabilities a company has, and subtract them from the assets and common stock equity of the company, what you would have left over is the book value. Most of the time, the book value is used as part of an evaluative measure, rather than being truly related to a company’s market value." },
    { title: "Broker", content: "This is the entity that buys and sells investments on your behalf. Usually, you pay a fee for this service. In the case of an online discount broker, you often pay a flat commission per trade. Other brokers, especially if they also manage your assets as a whole, just charge a percentage of your assets each year. TD Ameritrade, E*TRADE and Firstrade are our favorite brokerages." },
    { title: "Bull market", content: "This is a market that is trending higher, likely to gain. If you think that the market is going to go up, you are considered a “bull.” Additionally, the term, like bear, can be applied to how you feel about an individual investment. If you are “bullish” on a specific company, it means you think the stock price will rise." },
    { title: "Capital gain (or loss)", content: "his is the difference between what you bought an investment for and what you sell if for. If you buy 100 shares of a stock at $10 a share (spending $1,000) and sell your shares later for $25 a share ($2,500), you have a capital gain of $1,500. A loss occurs when you sell for less than you paid. So, if you sell this stock for $5 instead ($500), you have a capital loss of $500)." },
    { title: "Diversity", content: "A portfolio characteristic that ensures you have more than one type of asset. It also means choosing to buy investments in different sectors, industries, or geographic locations." },
    { title: "Dividend", content: "In some cases, a company will offer to divide up some of its income among shareholders. Dividends can be paid once, as a special use of them, or they can be paid more regularly, such as monthly, quarterly, semi-annually, or annually." },
    { title: "Dow Jones Industrial Average", content: "This average includes a price-weighted list of 30 blue-chip stocks. While there are only 30 companies included on the list, many people think of the Dow when they hear that “the stock market” gained or lost. The Dow is often used as a gauge of the health of the stock market as a whole, even though it is only a very small portion." },
    { title: "Exchange", content: "This is a place where investments, including stocks, bonds, commodities, and other assets are bought and sold. It’s a place where brokers (buyers and sellers) and others can connect. While many exchanges of “trading floors” most orders these days are executed electronically." },
    { title: "ETF", content: "Exchange-traded funds, a type of investment fund that trades like a stock. Investors buy and sell ETFs on the same exchanges as shares of stock." },
    { title: "Hedge Fund", content: "This is an alternative investment that uses pooled funds. A money manager or registered investment advisor sets up this type of structure as an LLC or a limited partnership. The manager raises money from outside investors and then invests and manages that money. Hedge funds are aimed at high-income investors, since individuals must earn at least $200,000 annually to be considered an accredited investor and eligible to invest with a hedge fund." },
    { title: "Index", content: "A tool used to statistically measure the progress of a group of stocks that share characteristics. This can include a group of stocks, a group of bonds, or a group of other assets." },
    { title: "Index Fund", content: "An index fund is a type of mutual fund that allows an individual to buy investments that mimic the trends of an index. These are generally more passive investments with lower fees than mutual funds." }, 
    { title: "IRA", content: "This stands for individual retirement account. It is a tax-advantaged account. There are several types of IRAs. Anyone over 18 with a job can open an IRA for themselves. However, not everyone will have access to every type of IRA." },
    { title: "Margin", content: "This is essentially borrowed money used to make an investment. You can get credit from a broker to buy more than you have actually money for. The hope is that you will make enough money that you will be able to repay the borrowed amount from your earnings" },
    { title: "Market capitalization", content: "The market cap of a company is figured by multiplying its current share price by the number of shares outstanding. The largest companies have market caps in the billions." },
    { title: "Money Market", content: "A money market account is an interest-bearing account that will usually pay a higher interest rate than a bank savings account would." },
    { title: "Mutual Fund", content: "A mutual fund is managed by a professional portfolio manager that purchases securities with money pooled from individual investors. The fund can hold individual stocks or bonds. Such funds typically come with higher fees than other investments, since the account is actively managed." },
    { title: "NASDAQ", content: "This is a U.S. exchange for buying and selling securities. It is based in New York City. Nasdaq is also an index of the stocks bought and sold on the Nasdaq exchange. (In case you’re curious, the initials stand for the National Association of Securities Dealers Automated Quotations." },
    { title: "New York Stock Exchange", content: "One of the most famous stock exchanges is the NYSE, which trades stocks in companies all over the United States, and even includes stocks of some international companies." },
    { title: "Personal Investment Strategy", content: "This is exactly what it sounds like: your personal approach and strategy to investments. There’s no single right way to invest. Learn about how investing works. Then define and execute your personal strategy." },
    { title: "P/E ratio", content: "This measure reflects how much you pay for each dollar that the company earns. A company often reports profits on a per-share basis. So a company might say that it has earned $5 per share. If that same stock is selling for $75 a share on the market, you divide $75 by $5 to come up with a P/E ratio of 15. The higher a P/E ratio is, the more there is expectations for higher earnings." },
    { title: "Recession", content: "A recession is defined as two consecutive quarters when a country sees negative economic activity. Usually, this is determined by a decline in GDP (gross domestic product) for two consecutive quarters." },
    { title: "Registered Investment Advisor (RIA)", content: "A financial investment advisor that has been through certain training, and that agrees to abide by certain rules, including ensuring that recommendations and trades made on your behalf are in your best interest." },
    { title: "S&P 500", content: "The Standard & Poor’s 500 is a stock market index that tracks the value of 500 companies in the United States. It’s similar to the Dow Jones in that it is also a stock market index." },
    { title: "Stock", content: "A stock represents ownership in a company. Companies divide their ownership stakes into shares, and the amount of shares you purchase indicates your level of ownership in the company. Stock is bought in the hopes that the company will be successful, and more people will want a stake, so you can sell your stake later at a higher price than you paid." },
    { title: "Taxable Accounts", content: "Account you can use for trading stocks, bonds, mutual funds, etc. Taxable accounts don’t carry any tax advantages, so you’ll be taxed on your investment income." },
    { title: "Tax-advantaged Accounts", content: "These types of investment accounts come with tax advantages of some type that let you defer or be exempt from taxes on investment income. Retirement accounts — where you can deduct contributions from your taxes, such as an individual retirement account (IRA) — fall into this category." },
    { title: "Yield", content: "This is associated with dividend investing. Your yield represents the ratio between the stock price paid and the dividend paid. A stock trading at $100 per share, with a dividend that amounts to $5 per year, you divide the $5 by $100 and turn it into a percentage. In this case, the yield would be 5%." },


  ];
export default class Description13 extends Component{
    render(){
        return (
            <View style={{flex:1}}>
                <View style={styles.HeaderView}>
                    <View style={{flexDirection:'row',paddingHorizontal:50,justifyContent:'center',alignItems:'center',marginBottom:10,}}>
                        <Image source={require('../assets/Logo.png')} style={{width:40,height:40}}/>
                        <Text style={{marginLeft:30,fontSize:15,fontWeight:'bold'}}>Knowledge Base</Text>
                    </View>
                </View>
                <ScrollView style={{flex: 1}}>
                    <View>
                        <View style={{height:100,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',elevation:4,backgroundColor:'#dcdcdc',shadowOpacity:0.2,borderRadius:10,marginTop:20,marginLeft:20,marginRight:20}}>
                            <Image source={require('../assets/book.png')} style={{width:'30%',height:100,borderBottomRightRadius:50,borderTopRightRadius:50,borderTopLeftRadius:10,borderBottomLeftRadius:10}}/>
                            <View>
                                <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold'}}>Knowledge</Text>
                                <Text style={{marginLeft:10,fontSize:15,fontWeight:'bold'}}>Base</Text>
                            </View>
                        </View>
                        <Container style={{backgroundColor:'transparent'}}>
                           
                            <Content  padder>
                            <Accordion headerStyle={{ backgroundColor: "#dcdcdc" }} dataArray={dataArray} expanded={0}/>
                            </Content>
                        </Container>
                        
                        
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems:'flex-end',
      justifyContent: 'flex-end',
    },
    HeaderView: {
        height:100,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-end',
        elevation:4,
        backgroundColor:'#fff',
        shadowOpacity:0.2,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        shadowOffset:{width:1,height:1}}
  });
  