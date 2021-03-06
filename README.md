# Design a URL shortener #

## Step 1 is to scope the project ##

**Since it's an API, do we need authentication or user accounts or developer keys?**
```
no let's leave it open to start
```

**If people can't delete links...do they persist forever? Or do we automatically remove old ones? First, it's worth considering what policies we could use for removing old ones:**

```
1.We could remove links that were created some length of time ago...like 6 months.
2.we could remove links that haven't been visited in some length of time...like 6 months.
```

**Should we let people choose their shortlink,or just always auto-generate it?**
```
For example, say they want ca.ke/parkers-resume. Let's definitely support that
```

**Do we need analytics, so people can see how many people are click on a link, etc?**
```
Good idea, let's leave it out to start.

It's okay if your list of features was different from ours. Let's proceed with these requirements so we're working on the same problem.
```

## Step 2 is to talk about the design goals ##
**If we're designing something, we should know what we are optimizing for! What are we optimizing for?**

### Design Goals ###

```
1.We should be able to store a lot of links, since we're not automatically expiring them.
2.Our shortlinks should be as short as possible. The whole point of a link shortener is to make short links! Having shorter links than our competition could be a business advantage.
3.Following a shortlink should be fast.
4.The shortlink followers should be resilient to load spikes. One of our links might be the top story on Reddit, for example.

It is okay if the list wasn't just like mine, but let's move forward
```

## Step 3 Next step: building the data model. ##
