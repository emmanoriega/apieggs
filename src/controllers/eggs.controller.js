import Eggs from "../models/eggs";



export const createEgg = async(req,res) =>{
    const newEggs = new Eggs({wallet: req.body.wallet, idegg: req.body.idegg})
    const eggSave = await newEggs.save()
    res.json('New Eggs Created ' + eggSave)
    
}

export const findOneEgg =  async (req,res) =>{
  const egg = await Eggs.find({
      wallet: req.params.id
  })
  res.json(egg)
}