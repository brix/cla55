![CLA55](http://brix.github.io/images/cla55.png "")

# Simply extend classes in JavaScript


## Usage

Compatible with CommonJS and AMD.

```js
var Cla55 = require('cla55').Cla55,
    cla55 = require('cla55').cla55;

Cla55.extend(protoProps, staticProps, _super);

cla55(parent, protoProps, staticProps, _super); 
```

## API

### Cla55()

#### Cla55.extend(protoProps, [staticProps], [_super])

##### Arguments:

* ```protoProps``` *[Object]* A hash of prototype methods/properties to extend (including ```constructor``` method)
* ```staticProps``` *[Object, optional]* A hash of static methods to extend
* ```_super``` *[Boolean, optional]*  Hook methods with ```._super()``` and ```._superApply()``` methods

##### Returns:

* *[Function]* Sub class inherited from ```Cla55```

### cla55(Parent, protoProps, [staticProps], [_super])

##### Arguments:

* ```Parent``` *Function* A function to inherit
* ```protoProps``` *[Object]* A hash of prototype methods/properties to extend (including ```constructor``` method)
* ```staticProps``` *[Object, optional]* A hash of static methods to extend
* ```_super``` *[Boolean, optional]*  Hook methods with ```._super()``` and ```._superApply()``` methods

##### Returns:

* *[Function]* Sub class inherited from ```Parent```
