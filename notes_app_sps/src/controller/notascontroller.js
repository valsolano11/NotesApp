 import notas from '../model/notasmodel.js';


export const getnota = async (req,res) =>{
 
    const notas = await notas.find({
        notas: req.notas.id
    }).populate('user')
    res.json(notas);
    
}
export const getNotas = async(req, res) =>{

    const notas = await notas.findById(req.params.id);
    if(!notas) return res.status(404).json({message: 'notas no Found'});
    res.status(200).json(notas)
}

export const createnotas = async(req,res) =>{

    const { title, content, date} = req.body;

    const newnotas = new notas({
        title,
        content,
        date,
        notas: req.user.id
    });
    const savednotas= await newnotas.save();
    res.status(200).json(savednotas)
}
export const updatenota = async(req,res) =>{
    const notas = await notas.findByIdAndUpdate(req.params.id, req.body,{
        new: true
});
    if(!notas) return res.status(404).json({message: 'notas no Found'});
    res.status(201).json(notas)
}

export const deletenotas= async(req,res) =>{
    const notas = await notas.findByIdAndDelete(req.params.id);
    if(!notas) return res.status(404).json({message: 'notas no Found'});
    return res.status(204)
};
