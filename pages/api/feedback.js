import {v4 as uuidv4} from 'uuid';
import fs from 'fs';
import path from 'path';

const handler = (req, res) => {
    let myuuid = uuidv4();
    const filePath = path.join(process.cwd(), 'data', 'feedback.json')
    const fileData = fs.readFileSync(filePath)
    const data = JSON.parse(fileData)
    if (req.method === 'POST') {
        const name = req.body.name
        data.push({id: myuuid, timestamp: Date.now(), name: name})
        fs.writeFileSync(filePath, JSON.stringify(data));
        res.status(201).json({message: 'sucess', name: data})
    } else if (req.method === 'DELETE') {
        const filteredData = data.filter((item)=> item.id !== req.body.id)
        fs.writeFileSync(filePath, JSON.stringify(filteredData));
        res.status(200).json({message: 'Done'})
    } else {
        res.status(200).json({feedbacks: data})
    }
    
}

export default handler;