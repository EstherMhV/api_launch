const Launch = require('../model/launchModel');
const textApiProvider = require('../providers/textApiProvider.js');

exports.listAllLaunches = async (req, res) => {

    try {
        const launches = await Launch.find({});
        res.status(200);
        res.json(launches);
    }
    catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: 'Erreur serveur' });
    }
}

exports.createALaunch = async (req, res) => {
    try {
        let newLaunch = new Launch(req.body);

        let randomTextPromise = textApiProvider.getFlightNumber();
        let response = await randomTextPromise;

        if (!newLaunch.mission_name) {
            newLaunch.mission_name = response;
        }

        let launch = await newLaunch.save();
        res.status(200).json(launch);

    } catch (error) {
        console.log(error);
        res.status(401).json({ message: 'Requete invalide' });
    }
}

exports.updateALaunch = async (req, res) => {
    try {
        const launch = await Launch.findByIdAndUpdate(req.params.id_launch, req.body, { new: true });
        res.status(200);
        res.json(launch);
    }
    catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: 'Erreur serveur' });
    }
}

exports.deleteALaunch = async (req, res) => {

    try {
        const launch = await Launch.findByIdAndDelete(req.params.id_launch, req.body, { new: true });
        res.status(200);
        res.json({ message: 'Supprimé' });
    }
    catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: 'Erreur serveur' });
    }
}

exports.getALaunch = async (req, res) => {

    try {
        const launch = await Launch.findById(req.params.id_launch);
        res.status(200);
        res.json(launch);
    }
    catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: 'Erreur serveur' });
    }
}