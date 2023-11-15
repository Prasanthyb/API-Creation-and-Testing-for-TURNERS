module.exports=(sequelize,DataType)=>{
    const Quote=sequelize.define("Quote",{

        carvalue:{
            type:DataType.INTEGER,
            allowNull:false
        },
        riskrating:{
            type:DataType.INTEGER,
            allowNull:false
        },
        monthlypremium:{
            type:DataType.INTEGER,
            allowNull:false
        },
        yearlypremium:{
            type:DataType.INTEGER,
            allowNull:false
        }

    })
    return Quote;
    
}