Install
---

    $ component install kelonye/ember-oauth

Use
---

```javascript

App.ApplicationRoute = Em.Route.extend(require('ember-oauth')); // redirect to signin if not oauthed

App.SigninRoute = Em.Route.extend({
  actions: {
    signin: function() {
      var controller = this.controllerFor('application');
      controller.set('user', {
        content: {
          id: 1
        }
      });
      controller.send('continue-signin');
    }
  }
});

```


```html
{{! application template }}
<form {{action 'signin' this on="submit"}}>
  <input name="username" type="text" placeholder="username"/>
  <input name="password" type="password" placeholder="password"/>
  <button type="submit">Sign in</button>
</form>
```

Example
---

    $ make example

License
---

MIT