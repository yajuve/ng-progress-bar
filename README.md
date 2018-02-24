# ng-progress-bar

# Preview

# How to use

```html
...
<ng-progress-bar></ng-progress-bar>
...
```


# Attributes 

Attribute     | Description                                     | Type   | Default
------------- | ----------------------------------------------- | ------ | -------------
value   | Percent         | number    | 0
hide   | Hide text on progress bar    | string | false
symbol          |           | string | %
outer-padding   |  | string | 3px
inner-padding   |  | string | 4px
outer-bg   |                               | string | #f4f4f4
inner-bg   |                               | string | #369fbf
radius   |                               | string | 25px
color   |                               | string | #fff

# Example

```html
...
 <ng-progress-bar 
        color="#fff"
        radius="25px"
        value="70"
        outer-padding="2px"
        inner-padding="4px"
        inner-bg="#ab3e37"
        outer-bg="#ffc7c4">
  </ng-progress-bar>
...
```
