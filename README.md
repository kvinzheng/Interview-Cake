# Interview-Cake

## Step 1 is to scope the project ##

**Since it's an API, do we need authentication or user accounts or developer keys?**
no let's leave it open to start

**If people can't delete links...d they persist forever? Or do we automatically remove old ones? First, it's worth considering what policies we could use for removing old ones:**

1.We could remove links that were created some length of time ago...like 6 months.
2.we could remove links that haven't been visited in some length of time...like 6 months.


**Should we let people choose their shortlink, or just always auto-generate it?**
For example, say they want ca.ke/parkers-resume. Let's definitely support that.
