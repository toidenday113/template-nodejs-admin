class UserModel{
    user;
    constructor(){
        this.user = 'users';
    }
    findAll() {
        return getTable(this.user).select();
    }

    findOne(id){
        return getTable(this.user).select().where('id', id);
    }

    insertAll(arrData){
        return getTable(this.user).insert(arrData)
    }

    insertOne(data){
        return getTable(this.user).insert(data);
    }

    update(data, arrId){
        return getTable(this.user).whereIn('id', arrId).update(data);
    }
    
    delete(arrId){
        return getTable(this.user).whereIn('id', arrId).del();
    }

    moveToTrashbin(arrId){
        return getTable(this.user).whereIn('id', arrId).update({'delete_at': new Date()})
    }

    login(where){
        return getTable(this.user).where(where).select().first();
    }

}

const userModel = new UserModel();

module.exports = userModel;