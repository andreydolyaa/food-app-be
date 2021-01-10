

const authService = require('./auth.service');


module.exports = {
    signup,
    login,
    logout
}


async function login(req, res) {
    // console.log('RREQ BODY LOGIN: ',req.body);
    const { email, password } = req.body;
    try {
        const user = await authService.login(email, password);
        req.session.user = user;
        console.log('user',user);
        res.json(user);
    }
    catch (err) {
        res.status(401)
    }
}

async function signup(req, res) {
    try {
        const { fullName, email, password, orders ,isOwner} = req.body;
        const account = await authService.signup(fullName, email, password, orders,isOwner);
        const user = await authService.login(email, password);
        req.session.user = user;
        res.json(user);
    }
    catch (err) {
        res.status(500)
    }
}


async function logout(req, res){
    try {
        req.session.destroy()
        res.send({ message: 'logged out successfully' })
    } catch (err) {
        res.status(500).send({ error: err })
    }
}