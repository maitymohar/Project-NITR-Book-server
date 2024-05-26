import Club from "../models/organisation.js";

export const createClub = async (req, res) => {
  try {
    const newClub = new Club(req.body);
    const savedClub = await newClub.save();
    res.status(201).json(savedClub);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getClubs = async (req, res) => {
  try {
    const clubs = await Club.find();
    res.status(200).json(clubs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getClubById = async (req, res) => {
  try {
    const club = await Club.findById(req.params.id);
    if (club) {
      res.status(200).json(club);
    } else {
      res.status(404).json({ message: "Club not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateClub = async (req, res) => {
  try {
    const updatedClub = await Club.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (updatedClub) {
      res.status(200).json(updatedClub);
    } else {
      res.status(404).json({ message: "Club not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteClub = async (req, res) => {
  try {
    const deletedClub = await Club.findByIdAndDelete(req.params.id);
    if (deletedClub) {
      res.status(200).json({ message: "Club deleted" });
    } else {
      res.status(404).json({ message: "Club not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
