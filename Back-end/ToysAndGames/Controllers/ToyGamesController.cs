using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToysAndGames.Data;
using ToysAndGames.Models;

namespace ToysAndGames.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToyGamesController : ControllerBase
    {
        private readonly AplicationDbContext _context;

        public ToyGamesController(AplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/ToyGames
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ToyGame>>> GetToyGame()
        {
            return await _context.ToyGame.ToListAsync();
        }

        // GET: api/ToyGames/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ToyGame>> GetToyGame(int id)
        {
            var toyGame = await _context.ToyGame.FindAsync(id);

            if (toyGame == null)
            {
                return NotFound();
            }

            return toyGame;
        }

        // PUT: api/ToyGames/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutToyGame(int id, ToyGame toyGame)
        {
            if (id != toyGame.id)
            {
                return BadRequest();
            }

            _context.Entry(toyGame).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ToyGameExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ToyGames
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ToyGame>> PostToyGame(ToyGame toyGame)
        {
            _context.ToyGame.Add(toyGame);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetToyGame", new { id = toyGame.id }, toyGame);
        }

        // DELETE: api/ToyGames/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteToyGame(int id)
        {
            var toyGame = await _context.ToyGame.FindAsync(id);
            if (toyGame == null)
            {
                return NotFound();
            }

            _context.ToyGame.Remove(toyGame);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ToyGameExists(int id)
        {
            return _context.ToyGame.Any(e => e.id == id);
        }
    }
}
