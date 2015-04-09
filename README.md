![CLA55](http://brix.github.io/images/cla55.png "")

# Simply extend classes in JavaScript


## Usage

Compatible with CommonJS and AMD.

```js
var Cla55 = require('cla55');

Cla55.extend(protoProps, staticProps, _super);

Cla55.create(Parent, protoProps, staticProps, _super);
```

## API

### Cla55()

#### Cla55.extend(protoProps, [staticProps], [_super])

Shortcut to create a new class and inherit from ```Cla55```.

##### Arguments:

* ```protoProps``` *[Object]* A hash of prototype methods/properties to extend (including ```constructor``` method)
* ```staticProps``` *[Object, optional]* A hash of static methods to extend
* ```_super``` *[Boolean, optional]*  Hook methods with ```._super()``` and ```._superApply()``` methods

##### Returns:

* *[Function]* Sub class inherited from ```Cla55```

#### Cla55.create(Parent, protoProps, [staticProps], [_super])

Class create helper to create a new class and inherit from ```Parent```.

##### Arguments:

* ```Parent``` *[Function]* A function to inherit
* ```protoProps``` *[Object]* A hash of prototype methods/properties to extend (including ```constructor``` method)
* ```staticProps``` *[Object, optional]* A hash of static methods to extend
* ```_super``` *[Boolean, optional]*  Hook methods with ```._super()``` and ```._superApply()``` methods

##### Returns:

* *[Function]* Sub class inherited from ```Parent```

#### Cla55.Cla55

Direct expose of the base class `Cla55`.

##### Returns:

* *[Function]* Base class  ```Cla55```
