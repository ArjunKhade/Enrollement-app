using backend_api.data;
using backend_api.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace backend_api.Controllers
{

    [ApiController]
    [Route("api/users")]
    public class UserController : Controller
    {
        private UsersDbContext userDbContext;

        public UserController(UsersDbContext userDbContext) { 
            this.userDbContext = userDbContext;
        }

        //get all users
        [HttpGet]
        public async Task<IActionResult> getAllUsers()
        {
            List<User> lstUser=null;

            try
            {
                lstUser = await userDbContext.Users.ToListAsync();
            }
            catch(Exception e)
            {

            }

            return Ok(lstUser);

        }

        //get user
        [HttpGet]
        [Route("{id:guid}")]
        [ActionName("getUser")]
        public async Task<IActionResult> getUser([FromRoute] Guid id)
        {
             
            try
            {
                var User = await userDbContext.Users.FirstOrDefaultAsync(x => x.Id == id);
            }
            catch(Exception e)
            {

            }

            if(User != null)
            {
                return Ok(User);
            }
            else
            {
                return NotFound("User Not Found!");
            }

        }

        //add user
        [HttpPost]
        public async Task<IActionResult> addUser([FromBody] User user)
        {
      
            try
            {
                user.Id = Guid.NewGuid();
                await userDbContext.Users.AddAsync(user);
                await userDbContext.SaveChangesAsync();
            }
            catch(Exception e)
            {

            }
            return CreatedAtAction(nameof(getUser), new { id = user.Id }, user);
        }


        //update user
        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> updateUser([FromBody] User user, [FromRoute] Guid id)
        {

            try
            {
                var existing_user = await userDbContext.Users.FirstOrDefaultAsync(x => x.Id == id);
                if (existing_user != null)
                {
                    existing_user.Name = user.Name;
                    existing_user.Email = user.Email;
                    existing_user.Phone = user.Phone;
                    existing_user.Topic = user.Topic;
                    existing_user.TimePreference = user.TimePreference;
                    existing_user.Subscription = user.Subscription;

                    await userDbContext.SaveChangesAsync();
                    return Ok(existing_user);

                }
            }
            catch(Exception e)
            {

            }
             return NotFound("User Not Exist!!");
             
        }

        [HttpDelete]
        [Route("{id:guid}")]
     
        public async Task<IActionResult> deleteUser([FromRoute] Guid id)
        {
            try
            {
                var ext_user = await userDbContext.Users.FirstOrDefaultAsync(x => x.Id == id);
                if (ext_user != null)
                {
                    userDbContext.Remove(ext_user);
                    await userDbContext.SaveChangesAsync();
                    return Ok(ext_user);
                }
            }catch(Exception e)
            {

            }
            
          return NotFound("User Not Found!");
      
        }




    }
}
