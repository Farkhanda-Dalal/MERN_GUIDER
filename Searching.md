# Different Ways to Find a Task by ID in Mongoose  

## 1. **Using `findById` (Preferred)**
```javascript
const task = await Task.findById(req.params.id);
```
✅ The simplest and most efficient way to find a document by `_id`.  

---

## 2. **Using `findOne` (Less Preferred)**
```javascript
const task = await Task.findOne({ _id: req.params.id });
```
🚨 Works, but redundant since `findById` is optimized for searching by `_id`.  

---

## 3. **Using `aggregate` (For Advanced Use Cases)**
```javascript
const task = await Task.aggregate([
    { $match: { _id: new mongoose.Types.ObjectId(req.params.id) } }
]);
```
🔹 Useful if additional transformations on the result are needed.  

---

## 4. **Using `lean()` for Performance Optimization**
```javascript
const task = await Task.findById(req.params.id).lean();
```
⚡ Converts the result into a plain JavaScript object, reducing memory overhead.  

---

## 5. **Using `select` to Retrieve Specific Fields**
```javascript
const task = await Task.findById(req.params.id).select("name status");
```
📌 Fetches only the `name` and `status` fields, reducing data transfer and improving performance.

